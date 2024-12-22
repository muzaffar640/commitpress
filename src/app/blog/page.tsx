import Header from "../../components/Header";
import BlogList from "../../components/Blog/BlogList";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gray-900">
      <Header />
      <BlogList />
      <div className="h-20 bg-gradient-to-b from-gray-800 to-gray-900"></div>
      <Footer />
    </main>
  );
}
