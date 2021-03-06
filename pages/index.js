import React, { useContext } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
} from "@material-ui/core";
// import { data } from "../utils/data";
import Layout from "../components/Layout";
import db from "../utils/db";
import Product from "../models/Product";
import axios from "axios";
import { Store } from "../utils/Store";

export default function Home(props) {
  const { products } = props;
  const router = useRouter();
  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async (product) => {
    const { data } = await axios.get(`/api/products/${product._id}`);
    const exitItem = state.cart.cartItems.find((x) => x._id === product._id);
    const quantity = exitItem ? exitItem.quantity + 1 : 1;

    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }

    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    router.push("/cart");
  };
  return (
    <Layout>
      <div>
        <h1>Products</h1>

        <Grid container spacing={3}>
          {products.map((product) => {
            return (
              <Grid item md={4} key={product.name}>
                <Card>
                  <NextLink href={`/product/${product.slug}`} passHref>
                    <CardActionArea>
                      <CardMedia
                        component="img"
                        image={product.image}
                        title={product.name}
                      ></CardMedia>
                      <CardContent>
                        <Typography>{product.name}</Typography>
                      </CardContent>
                    </CardActionArea>
                  </NextLink>
                  <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button
                      size="small"
                      color="primary"
                      onClick={() => addToCartHandler(product)}
                    >
                      Add to cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </Layout>
  );
}

// fetching data from the server
export async function getServerSideProps() {
  await db.connect();
  const products = await Product.find({}).lean();
  await db.disconnect();

  return {
    props: {
      products: products.map(db.convertDocToObj),
    },
  };
}
