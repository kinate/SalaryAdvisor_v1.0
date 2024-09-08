import { Form } from "@remix-run/react";
import { Link } from "@remix-run/react";


export default function NoteForm() {
  //DONE-DEAL
  return (
    <div className="pt-3">
    <Form method="post" className="max-w-sm mx-auto">
      <div className="mb-5">
        <input
          type="text"
          name="salary_code"
          placeholder="Enter Salary Code"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className="mb-5">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search Salary
        </button>
        <Link
          to="/codelist"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Code List
        </Link>
      </div>
    </Form>
    </div>
  );
}
