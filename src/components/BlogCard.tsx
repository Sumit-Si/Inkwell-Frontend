import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Editor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { formatDistanceToNowStrict } from "date-fns";

interface PostCardProps extends React.ComponentProps<"div"> {
  id: string;
  bannerImage: string;
//   bannerSize: number;
  title: string;
  description: string | null;
  slug?: string | null;
  authorName: string;
  postedAt: string;
  size?: "default" | "sm";
}

const BlogCard: React.FC<PostCardProps> = ({
  bannerImage,
//   bannerSize,
  id,
  title,
  slug,
  authorName,
  description,
  postedAt,
  size = "default",
  className,
  ...props
}) => {
  const editor = new Editor({
    extensions: [StarterKit],
    content: description,
    editable: false,
    autofocus: false,
  });

  return (
    <Card
      className={cn(
        "relative group pt-2 h-full @container",
        size === "default" && "flex flex-col-reverse justify-end",
        size === "sm" && "py-2 grid grid-cols-[1fr_1.15fr] gap-0 item-center",
        className
      )}
      {...props}
    >
      <CardHeader
        className={cn(
          "gap-2",
          size === "sm" && "content-center order-1 ps-4 py-3"
        )}
      >
        <div className="flex items-center gap-2 text-muted-foreground text-sm font-medium">
          <p className="@max-3xs:hidden">{authorName}</p>

          <div className="w-1 h-1 rounded-full bg-muted-foreground/50 @max-3xs:hidden"></div>

          <Tooltip delayDuration={250}>
            <TooltipTrigger>
              {formatDistanceToNowStrict(postedAt, { addSuffix: true })}
              {/* {postedAt} */}
            </TooltipTrigger>

            <TooltipContent>
              {new Date(postedAt).toLocaleString("en-US", {
                dateStyle: "long",
                timeStyle: "short",
              })}
            </TooltipContent>
          </Tooltip>
        </div>

        <Link to={`/posts/${id}`} viewTransition>
          <CardTitle
            className={cn(
              "underline-offset-4 hover:underline leading-tight line-clamp-2",
              size === "default" && "text-xl @md:text-2xl"
            )}
          >
            {title}
          </CardTitle>
        </Link>

        <CardDescription
          className={cn(
            "line-clamp-2 text-balance",
            size === "sm" && "@max-2xs:hidden"
          )}
        >
          {editor.getText()}
        </CardDescription>
      </CardHeader>

      <CardContent className="px-2">
        <Link to={`/posts/${id}`} viewTransition>
          <AspectRatio ratio={21 / 9} className="rounded-lg overflow-hidden">
            <img
              src={bannerImage}
              width={52}
            //   width={bannerSize}
              //   height={bannerHeight}
              className="w-full h-full object-cover"
              alt={title}
            />
          </AspectRatio>
        </Link>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
