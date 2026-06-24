import DeletePropertyButton from "./delete-property-button";
import Link from "next/link";
type Property = {
  id: string;
  title: string;
  city: string;
  price: number;
};

interface Props {
  properties: Property[];
}

export default function PropertyTable({
  properties,
}: Props) {
  return (
    <table className="w-full border">
      <thead>
        <tr className="border-b">
          <th className="text-left p-3">
            Title
          </th>

          <th className="text-left p-3">
            City
          </th>

          <th className="text-left p-3">
            Price
          </th>

          <th className="text-left p-3">
           Actions
          </th>
        </tr>
      </thead>

      <tbody>
        {properties.map((property) => (
          <tr
            key={property.id}
            className="border-b"
          >
            <td className="p-3">
              {property.title}
            </td>

            <td className="p-3">
              {property.city}
            </td>

            <td className="p-3">
              ₹{" "}
              {property.price.toLocaleString(
                "en-IN"
              )}
            </td>
            <td className="p-3 flex gap-4">
  <Link
    href={`/admin/properties/${property.id}/edit`}
    className="text-blue-600 hover:underline"
  >
    Edit
  </Link>

  <DeletePropertyButton
  propertyId={property.id}
/>
</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}