import React from "react";

const BlogLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h2>Blog Layout</h2>
      {children}
    </div>
  );
};

export default BlogLayout;
