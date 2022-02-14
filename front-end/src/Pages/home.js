import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, makeStyles, OutlinedInput, InputAdornment, Icon, InputLabel, Select, MenuItem, FormControl } from '@material-ui/core/';
import Card from '../components/Card';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: '5px',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center'
    },
    options: {
        padding: "16px"
    }
}));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] = React.useState(products)
    const [order, setOrder] = React.useState("asc")
    const classes = useStyles();

    const handleProductsSearch = (event) => {
        const search = event.target.value.toLocaleLowerCase()
        setFilteredProducts(products.filter((product) => product.name_product.toLocaleLowerCase().includes(search)))
    }

    const categorys = products.map(
        category => {
            const container = {};
            container['id'] = category.id_categorys;
            container['name'] = category.name_categorys;
            return container;
        }
    )

    const category = categorys.map(JSON.stringify)
        .filter(function (item, index, arr) {
            return arr.indexOf(item, index + 1) === -1;
        })
        .map(JSON.parse)

    const arrayCategory = categorys.map(category => category.name)
    let count = {};

    for (let i = 0; i < arrayCategory.length; i++) {
        {
            let key = arrayCategory[i];
            count[key] = (count[key] ? count[key] + 1 : 1)
        }
    }

    React.useEffect(() => {
        console.log(order)
    }, [order])

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid xs={1}></Grid>
            <Grid container xs={10} spacing={3} className={classes.root}>
                <Grid container xs={12} className={classes.options}>
                    <Grid xs={4}>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            onInput={handleProductsSearch}
                            endAdornment={
                                <InputAdornment position="end">
                                    <Icon>search</Icon>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </Grid>
                    <Grid xs={4}>
                        <FormControl variant="outlined" >
                            <InputLabel id="demo-simple-select-outlined-label">Ordenação</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={order}
                                label="Ordenação"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"asc"}>Menor Preço</MenuItem>
                                <MenuItem value={"desc"}>Maior Preço</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                {filteredProducts.map(item => {
                    return (
                        <Card
                            key={item.id_product}
                            product={item}
                        >
                            {item.name_product}
                        </Card>
                    )
                })}
            </Grid>
        </Grid>
    )
}

export default HomePage;
