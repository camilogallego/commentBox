import React, { useContext,useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Context } from '../../context/Context';
import { TrashIcon } from '@heroicons/react/solid'
import "./Table.css"

const useStyles = makeStyles({
  table: {
    minWidth: 100,
    height: 80
  },
  container: {
    maxHeight: 330,
  },
});

export default function DataTable({ handleDelete }) {
  const classes = useStyles();
  const  {comments}  = useContext(Context);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    
    <TableContainer className={classes.container}component={Paper}>
      <Table className={classes.table} stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Comentarios</TableCell>
            <TableCell align="right">Usuarios</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comments.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.message}
              </TableCell>
              <TableCell align="right">
                {row.owner.firstName} {row.owner.lastName}
              </TableCell>
              <TableCell align="right">
                <TrashIcon className="icon" onClick={() => handleDelete(row.id)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}