import pool from "@/app/config/pool";
import Table from "@/app/config/table";
import { Crud } from "../helper/crud";

/*
{
  id_ruangan,
  id_user,
  created_at,
  book_date,
  time_start,
  duration,
  agenda,
  prtcpt_ctr,
  remark,
  is_active
}
*/

interface NewBook {
  id_ruangan: any;
  id_user: any;
  created_at: any;
  book_date: any;
  time_start: any;
  duration: any;
  agenda: any;
  prtcpt_ctr: any;
  remark: any;
  is_active: any;
}

export async function POST(request: Request) {
  try {
    const bookData = await request.json();
    const bookRoom = await addNewBook(bookData);
    return Response.json(bookRoom, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json(error, { status: 500 });
  }
}

async function addNewBook(params: NewBook) {
  const client = await pool.getConnection();
  const values: { key: string; value: string }[] = Object.keys(params).map(
    (item) => {
      return { key: item, value: params[item as keyof NewBook] };
    }
  );
  try {
    await client.beginTransaction();
    const [query, val] = Crud.insertItem(Table.REQBOOK, values);
    const insertItem = await client.query(query, val);
    console.log(insertItem);
    return insertItem;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
