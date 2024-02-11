import Navbar from "./components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full bg-slate-900 pb-6">
      <Navbar />
      <main className="flex-1 overflow-y-scroll h-max">{children}</main>
    </div>
  );
};

export default RootLayout;
