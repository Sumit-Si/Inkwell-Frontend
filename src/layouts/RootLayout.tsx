import { Outlet } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Loading from "@/components/Loading";

const RootLayout = () => {
  
  return (
    <div className="min-h-dvh flex flex-col bg-background text-foreground">
      <Loading className='z-40' />
      
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default RootLayout;
