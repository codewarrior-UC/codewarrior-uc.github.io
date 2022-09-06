import {format} from "date-fns"

export const COLUMNS = [
    {
        Header: "First Name",
        Footer: "First Name",
        accessor: 'first_name'
    },
    {
        Header: "Last Name",
        Footer: "Last Name",
        accessor: "last_name"
    },
    {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "date_of_birth",
        Cell: ({value}) => {return format(new Date(value), 'MM/dd/yyyy')}
    },
    {
        Header: "Email",
        Footer: "Email",
        accessor: "email"
    },
    {
        Header: "Phone",
        Footer: "Phone",
        accessor: "phone"
    },
]

export const GROUPED_COLUMNS = [
    {
        Header: "Name",
        Footer: "Name",
        columns: [
            {
                Header: "First Name",
                Footer: "First Name",
                accessor: 'first_name'
            },
            {
                Header: "Last Name",
                Footer: "Last Name",
                accessor: "last_name"
            },
        ]
    },
    {
        Header: "Info",
        Footer: "Info",
        columns: [
            {
                Header: "Date of Birth",
                Footer: "Date of Birth",
                accessor: "date_of_birth",
                Cell: ({value}) => {return format(new Date(value), 'MM/dd/yyyy')}
            },
            {
                Header: "Email",
                Footer: "Email",
                accessor: "email"
            },
            {
                Header: "Phone",
                Footer: "Phone",
                accessor: "phone"
            },
        ]
    }
]