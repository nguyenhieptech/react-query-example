import { Checkbox } from "@/components/ui/checkbox";
import { User } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<User>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-2">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "first_name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="First Name" />,
    cell: ({ row }) => <div className="w-6">{row.getValue("first_name")}</div>,
  },
  {
    accessorKey: "last_name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Last Name" />,
    cell: ({ row }) => <div className="w-6">{row.getValue("last_name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email" />,
    cell: ({ row }) => <div className="w-48">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "gender",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Gender" />,
    cell: ({ row }) => <div className="w-6">{row.getValue("gender")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
