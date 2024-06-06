import Nav from "../ui/Landing/nav";

 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">    
        <Nav />
    </div>
  );
}