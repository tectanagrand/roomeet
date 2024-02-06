import pool from "@/app/config/pool";

export async function POST(request: Request) {
  const req = await request.json();
  const dateBook = req.dateBook;
  const startTime = req.startTime;
  const duration = req.duration;
  const capacity = req.capacity;
  try {
    const rooms = await getAvailableRoom(
      dateBook,
      startTime,
      duration,
      capacity
    );
    return Response.json(rooms, { status: 200 });
  } catch (error) {
    return Response.json(error, { status: 500 });
  }
}

async function getAvailableRoom(
  dateBook: any,
  startTime: any,
  duration: any,
  capacity: any
) {
  const client = await pool.getConnection();
  try {
    const q = `SELECT
    *
  FROM
    mst_room mst
  WHERE
    mst.id_ruangan NOT IN (
      SELECT
        rqbk.id_ruangan
      FROM
        req_book rqbk
      WHERE
        rqbk.book_date = DATE('${dateBook}')
      AND rqbk.time_start >= TIME('${startTime}')
      AND ADDTIME(TIME('14:00'), '${duration}' || ':00:00') <= ADDTIME(
        rqbk.time_start,
        rqbk.duration || ':00:00'
      )
    )
    and mst.kapasitas >= ${capacity}`;
    const getRooms = await client.query(q);
    return getRooms[0];
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    client.release();
  }
}
