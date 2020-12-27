/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable arrow-body-style */
import React, {
  useState,
  useEffect,
} from 'react';

import PropTypes from 'prop-types';
import clsx from 'clsx';

import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Title from './components/title';
// import Search from './components/search';
// import Display from './components/display';

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Donut', 452, 25.0, 51, 4.9),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
//   createData('Honeycomb', 408, 3.2, 87, 6.5),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Jelly Bean', 375, 0.0, 94, 0.0),
//   createData('KitKat', 518, 26.0, 65, 7.0),
//   createData('Lollipop', 392, 0.2, 98, 0.0),
//   createData('Marshmallow', 318, 0, 81, 2.0),
//   createData('Nougat', 360, 19.0, 9, 37.0),
//   createData('Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return - 1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => - descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Company Name',
  },
  {
    id: 'symbol',
    numeric: true,
    disablePadding: false,
    label: 'Symbol',
  },
  {
    id: 'price',
    numeric: true,
    disablePadding: false,
    label: 'Price',
  },
  {
    id: 'exchange',
    numeric: true,
    disablePadding: false,
    label: 'Exchange',
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={ headCell.id }
            align={ headCell.numeric ? 'right' : 'left' }
            padding={ headCell.disablePadding ? 'none' : 'default' }
            sortDirection={ orderBy === headCell.id ? order : false }
          >
            <TableSortLabel
              active={ orderBy === headCell.id }
              direction={ orderBy === headCell.id ? order : 'asc' }
              onClick={ createSortHandler(headCell.id) }
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={ classes.visuallyHidden }>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  // classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: - 1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [symbolList, setSymbolList] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('companyName');
  const [page, setPage] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [dense, setDense] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState();
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, symbolList.length - page * rowsPerPage);

  useEffect(() => {
    fetch('/marketSymbols')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setSymbolList(response);
      })
      .catch((error) => {
        alert('Sorry, retrieving the stock market symbol list failed, try again later.');
        console.log(error);
      });
  }, []);

  const handleExpand = (event, symbol) => {
    event.preventDefault();
    // setExpanded(! expanded);
    fetch(`/dataprofile?input=${symbol}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        if (data.length === 10) {
          data.pop();
        }
        setData(response);
      })
      .catch((error) => {
        alert('Please enter a valid stock symbol...');
        console.log(error);
      });
  };

  return (
    <div id='container-A'>
      <div id='container-B'>
        <Title />
        <div className={ classes.root }>
          <Paper className={ classes.paper }>
            <TableContainer>
              <Table
                className={ classes.table }
                aria-labelledby='tableTitle'
                size={ dense ? 'small' : 'medium' }
                aria-label='enhanced table'
              >
                <EnhancedTableHead
                  order={ order }
                  orderBy={ orderBy }
                  onRequestSort={ handleRequestSort }
                  rowCount={ symbolList.length }
                />
                <TableBody>
                  {stableSort(symbolList, getComparator(order, orderBy))
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((index) => {
                      return (
                        <TableRow
                          hover
                          tabIndex={ - 1 }
                          key={ index.symbol }
                          onClick={ (event) => handleExpand(event, index.symbol) }
                        >
                          <TableCell padding='checkbox'>
                            <Checkbox
                              checked={ handleExpand(index.symbol) }
                            />
                          </TableCell>
                          <TableCell component='th' scope='row' padding='none'>
                            {index.name}
                          </TableCell>
                          <TableCell align='right'>{index.symbol}</TableCell>
                          <TableCell align='right'>{index.price}</TableCell>
                          <TableCell align='right'>{index.exchange}</TableCell>
                        </TableRow>
                      );
                    })}
                  {emptyRows > 0 && (
                    <TableRow style={ { height: (dense ? 33 : 53) * emptyRows } }>
                      <TableCell colSpan={ 6 } />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={ [5, 10, 25] }
              component='div'
              count={ symbolList.length }
              rowsPerPage={ rowsPerPage }
              page={ page }
              onChangePage={ handleChangePage }
              onChangeRowsPerPage={ handleChangeRowsPerPage }
            />
          </Paper>
          <FormControlLabel
            control={ <Switch checked={ dense } onChange={ handleChangeDense } /> }
            label='Dense padding'
          />
        </div>
      </div>
    </div>
  );
};

export default App;
