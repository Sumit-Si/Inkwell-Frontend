import Page from "@/components/Page";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { type DropdownMenuProps } from "@radix-ui/react-dropdown-menu";
import { Separator } from "@/components/ui/separator";
import type { Posts } from "@/types";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {
  ArrowLeftIcon,
  FacebookIcon,
  LinkedinIcon,
  LinkIcon,
  MessageSquareIcon,
  ShareIcon,
  ThumbsUpIcon,
  TwitterIcon,
} from "lucide-react";
import { useCallback, useMemo } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { getReadingTime, getUsername } from "@/lib/utils";

interface ShareDropdownProps extends DropdownMenuProps {
  title: string;
}

export const ShareDropdown = ({
  title,
  children,
  ...props
}: ShareDropdownProps) => {
  const postUrl = window.location.href;
  const shareText = "Just read this insightful article and wanted to share!";

  const SHARE_LINKS = useMemo(() => {
    return {
      x: `https://x.com/intent/post?url=${encodeURIComponent(
        postUrl
      )}&text=${encodeURIComponent(`${shareText} "${title}"`)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        postUrl
      )}`,
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
        postUrl
      )}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(
        shareText
      )}`,
    };
  }, [title, postUrl]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(postUrl);
      toast.success("Link copied!");
    } catch (error) {
      toast.error("Failed to copy!");
      console.error("Failed to copy: ", error);
    }
  }, [postUrl]);

  const shareOnSocial = useCallback((platformUrl: string) => {
    window.open(platformUrl, "_blank", "noopener,noreferrer");
  }, []);

  return (
    <DropdownMenu {...props}>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>

      <DropdownMenuContent className="min-w-60">
        <DropdownMenuItem onSelect={handleCopy}>
          <LinkIcon />
          Copy link
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem onSelect={() => shareOnSocial(SHARE_LINKS.x)}>
          <TwitterIcon />
          Share on X
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={() => shareOnSocial(SHARE_LINKS.facebook)}>
          <FacebookIcon />
          Share on Facebook
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={() => shareOnSocial(SHARE_LINKS.linkedin)}>
          <LinkedinIcon />
          Share on linkedin
        </DropdownMenuItem>

        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const PostDetails = () => {
  const navigate = useNavigate();

  const { data } = useLoaderData() as { data: Posts };
  console.log("post",data);
  

  const editor = useEditor({
    extensions: [StarterKit],
    content: data?.description || "",
    editable: false,
    autofocus: false,
  });

  return (
    <Page>
      <article className="relative container max-w-[720px] pt-6 pb-12">
        <Button
          variant={"outline"}
          size={"icon"}
          className="sticky top-22 -ms-16"
          onClick={() => navigate(-1)}
        >
          <ArrowLeftIcon />
        </Button>

        <h1 className="text-4xl leading-tight font-semibold -mt-10">
          {data?.title}
        </h1>

        <div className="flex items-center gap-3 my-8">
          <div className="flex items-center gap-3">
            {/* <Avatar email={post.author.email} size="32" round /> */}
            <h3>{data?.author?.email}</h3>

            {/* <span>{getUsername(data?.author?.fullName)}</span> */}
          </div>

          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:w-1 rounded-full"
          />

          <div className="text-muted-foreground">
            {getReadingTime(editor.getText() || "")} min read
          </div>

          <Separator
            orientation="vertical"
            className="data-[orientation=vertical]:w-1 rounded-full"
          />

          <div className="text-muted-foreground">
            {new Date(data?.postedAt).toLocaleDateString("en-US", {
              dateStyle: "medium",
            })}
          </div>
        </div>

        <Separator />

        <div className="flex items-center gap-2 my-2">
          <Button variant={"ghost"}>
            <ThumbsUpIcon />
            {/* {blog.likesCount} */}
            {/* {post} */}
          </Button>

          <Button variant={"ghost"}>
            <MessageSquareIcon />
            {data?.comments}
          </Button>

          <ShareDropdown title={data?.title}>
            <Button variant={"ghost"} className="ms-auto">
              <ShareIcon />
              Share
            </Button>
          </ShareDropdown>
        </div>

        <Separator />

        <div className="my-8">
          <AspectRatio
            ratio={21 / 9}
            className="overflow-hidden rounded-xl bg-border"
          >
            <img
              src={data?.bannerImage}
              //   width={blog.banner.width}
              //   height={blog.banner.height}
              width={52}
              height={52}
              alt={`Banner of blog: ${data?.title}`}
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>

        <EditorContent editor={editor} />
      </article>
    </Page>
  );
};

export default PostDetails;
