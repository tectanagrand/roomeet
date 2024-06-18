"use client";

import BookForm from "@/components/book";

const BookPage = ({ params }: { params: { bookpar: string[] } }) => {
  return <BookForm bookpar={params.bookpar} />;
};

export default BookPage;
