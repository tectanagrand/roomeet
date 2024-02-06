interface Crud {
  insertItem: (
    to_table: string,
    value: Array<{ key: string; value: any }>
  ) => Array<any>;
  updateItem: (
    to_table: string,
    value: Array<{ key: string; value: any }>,
    where: Array<{ key: string; value: any }>
  ) => Array<any>;
}

export const Crud: Crud = {
  insertItem: (to_table, value) => {
    let query = "";
    const startQuery = "INSERT INTO ";
    let arrayVal: any[] = [];
    let arrayOfparam: string[] = [];
    const arrayOfValkey: any = value.map((item) => {
      arrayVal.push(item.value);
      arrayOfparam.push("?");
      return item;
    });
    query =
      startQuery +
      to_table +
      ` (${arrayOfValkey.join(", ")})` +
      " VALUES " +
      `(${arrayOfparam.join(", ")}) ;`;
    return [query, arrayVal];
  },
  updateItem: (to_table, value, where) => {
    let query = "";
    const startQuery = "UPDATE ";
    let arrayVal: any[] = [];
    let arrayOfparam: string[] = [];
    const arrayOfValkey: any[] = value.map((item) => {
      arrayVal.push(item.value);
      arrayOfparam.push("?");
      return `${item.key} = ?`;
    });
    const arrayOfWhere: any[] = where.map((item) => {
      return `${item.key} = ${item.value}`;
    });
    query =
      startQuery +
      to_table +
      `SET ${arrayOfValkey.join(", ")}` +
      " WHERE " +
      `(${arrayOfWhere.join(", ")}) ;`;
    return [query, arrayVal];
  },
};
