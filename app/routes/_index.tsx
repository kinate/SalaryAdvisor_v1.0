import type { MetaFunction } from "@remix-run/node";
import { Link, json } from "@remix-run/react";
import SearchForm from "~/components/SearchForm";
import ShowSalary from "~/components/ShowSalary";
import { useActionData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Salary Advisor" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function action({ request }: { request: Request }) {
  // READ How this object and data type works.
  const formData = await request.formData();
  const salaryData = {
    salary_code: formData.get("salary_code"),
  };

  let fetchData = await fetch(
    `http://127.0.0.1:8000/api/v1/fetchSalary/${salaryData.salary_code}`
  );
  let salary = await fetchData.json();
  console.log(salary);
  return json({ salary });
}

export default function Index() {
  let data = useActionData<{ salary: any }>();
  return (
    <>
      <div className="pt-12">
        <h3 className="text-4xl font-extrabold dark:text-white pb-4 max-w-sm mx-auto">
          Salary Advisor 🕵🏽‍♂️
        </h3>
        {data && (
          <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 max-w-sm mx-auto">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.salary.sector} ({data.salary.general_code})
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              <ul className="max-w-md space-y-1 text-gray-500 list-none list-inside dark:text-gray-400">
                <li>
                  <b>General Code :</b> {data.salary.general_code}
                </li>
                <li>
                  <b>Code Category :</b>
                  {data.salary.code_category}
                </li>
                <li>
                  <b>Salary Code :</b> {data.salary.salary_code}
                </li>
                <b>Salary Amount:</b>{" "}
                {Number(data.salary.salary).toLocaleString("en-US", {
                  style: "currency",
                  currency: "TZS",
                })}/=
                <li>
                  <b>Year:</b> {data.salary.year}
                </li>
              </ul>
            </p>
          </div>
        )}
      </div>
      <SearchForm />
    </>
  );
}
