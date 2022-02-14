import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Grid, Typography, List, makeStyles, RadioGroup, FormControlLabel, Radio, Divider, Checkbox} from '@material-ui/core/';
import Item from '../components/Item';
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
}));

const HomePage = () => {
    const products = useSelector(state => state.products)
    const [filteredProducts, setFilteredProducts] = React.useState(products)
    const classes = useStyles();

    const handleProductsSearch = (event) => {
        const search = event.target.value.toLocaleLowerCase()
        setFilteredProducts(products.filter((product) => product.name_product.toLocaleLowerCase().includes(search)))
    }

    const handlePriceFilter = (event, filter) => {
        if (filter === "cheap") {
            if (event.target.checked) {
                setFilteredProducts(filteredProducts.filter((product) => product.price <= 300)) 
            }
        else {
            setFilteredProducts(filteredProducts.filter((product) => product.price <= 300)) 
            }
        
        }
        
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
    console.log(products)

    return (
        <Grid container spacing={3} className={classes.root}>
            <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <Typography variant='h5'>
                        Filtro
                    </Typography>
                    <Grid>
                        <Typography variant='h6'>
                            Preço
                        </Typography>
                        <FormControlLabel control={<Checkbox defaultChecked onChange={(event) => {handlePriceFilter(event, "cheap")}}/>} label="R$ 100 - R$ 300"/>
                        <FormControlLabel control={<Checkbox defaultChecked onChange={(event) => {handlePriceFilter(event, "expensive")}}/>} label="R$ 300 - R$ 450"/>
                        <Divider/>
                        <Typography variant='h6'>
                            Categorias
                        </Typography>
                        {category.map(
                            category => {
                                return ( 
                                <div>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label={category.name} />
                                </div>
                                )
                            }
                        )}
                        
  
                    </Grid>
                    {/* <List>
                        {category.map(
                            category => {
                                return (
                                    <Item
                                        key = {category.id} 
                                        name= {category.name}
                                        details={count[category.name]}
                                    />
                                )
                            }
                        )}
                    </List> */}
                </Paper>
            </Grid>
            <Grid container xs={9} spacing={3} className={classes.root}>
                <Grid xs={12}>
                    <input type="text" style={{ width: "100%" }} onInput={handleProductsSearch} />
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
