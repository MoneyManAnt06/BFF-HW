"use client"
import Button from "../Button"
import { FaTrashCan } from "react-icons/fa6";
import { FaRegEdit } from "react-icons/fa";

const Table = () => {
  return (
    <table className="table-auto">
  <thead>
    <tr>
      <th>ID</th>
      <th>Note</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="border border-indigo-500">
      <td>1</td>
      <td>Malcolm Lockyer</td>
      <td>
        <Button CustomClass="" onClick={()=>{}}>
            <FaTrashCan />
        </Button>
        <Button CustomClass="" onClick={()=>{}} >
            <FaRegEdit />
        </Button>
      </td>
    </tr>
    <tr>
      <td>2</td>
      <td>The Eagles</td>
      <td></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Earth, Wind, and Fire</td>
      <td></td>
    </tr>
  </tbody>
</table>
  )
}

export default Table
