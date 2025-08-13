export default async function BlogDetail({ params }) {
  const { id } = await params; // ✅ karena params sekarang Promise di Next.js 15

  const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`);
  const blog = await res.json();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      {blog.image && (
        <img
          src={`http://127.0.0.1:8000/storage/${blog.image}`}
          alt={blog.title}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />
    </div>
  );
}
