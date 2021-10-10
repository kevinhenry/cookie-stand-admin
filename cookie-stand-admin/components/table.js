import { TrashIcon } from "@heroicons/react/outline";
import useResource from "../hooks/useResource";

export default function ReportTable({ hours, sales }) {
    const { deleteResource, loading } = useResource();
    console.log("this is sales", sales);
    if (sales && sales.length === 0) {
        return <h2 className="text-center">No Cookie Stand Available</h2>;
    }

    return (
        <table className='m-8 w-3/4'>
            {/* <table className="w-1/2 mx-auto my-4 bg-gray-200"></table> */}
            <thead>
                <tr className='odd: bg-green-500'>
                    <th>Location</th>
                    {/* <th className="px-6">Location</th> */}
                    {hours.map((hour) => {
                        return (
                            <th key={Math.random()}>
                                {/* <th className="px-2" key={Math.random()}> */}
                                {hour}
                            </th>
                        );
                    })}
                    <th className="px-4">Totals</th>
                </tr>
            </thead>
            <tbody>
                {sales &&
                    sales.map((store) => {
                        return (
                            <tr className="odd: bg-green-400 even:bg-green-300 border border-grey-700" key={store.id}>
                                {/* <tr className="odd:bg-gray-400 even:bg-gray-300" key={store.id}>     */}
                                <td className="border border-gray-700 text-center capitalize p-1">
                                    {/* <td className="flex justify-between p-2 text-left"> */}
                                    {store.location}
                                    <TrashIcon
                                        className="w-4 text-red"
                                        onClick={() => deleteResource(store.id)}
                                    />
                                </td>

                                {store.hourly_sales.map((sale) => {
                                    return <td className='text-center border border-gray-700'>{sale}</td>;
                                    // return <td>{sale}</td>;
                                })}
                                <td className='text-center border border-gray-700'>
                                    {store.hourly_sales.reduce((acc, cur) => {
                                        return acc + cur;
                                        // return acc + cur;
                                    }, 0)}
                                </td>
                            </tr>
                        );
                    })}
            </tbody>
            <tfoot>
                <tr className='bg-green-500 border border-gray-700 text-center font-bold'>Totals</tr>
            </tfoot>
        </table>
    );
}
