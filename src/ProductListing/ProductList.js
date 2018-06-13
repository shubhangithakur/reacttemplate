import React,{ Component } from 'react'
import { Jumbotron,Grid,Row,Col,Image,Button } from 'react-bootstrap'
import StarRatingComponent from 'react-star-rating-component';

import './ProductList.css'

class ProductList extends Component{

  constructor(){
    super();
    this.state={
      data:[
        {
           prodimg:"./assets/studytable.jpg",
           prodname:"Robert Recleaner Sofa set",
           producPrice:"Rs14,000",
           rating: 4
         },
         {
            prodimg:"./assets/studytable.jpg",
            prodname:"Robert Recleaner1 Sofa set",
            producPrice:"Rs14,000",
            rating: 3
          },
          {
             prodimg:"./assets/desk.jpg",
             prodname:"Robert Recleaner2 Sofa set",
             producPrice:"Rs14,000",
             rating: 3
           },
           {
              prodimg:"./assets/studytable.jpg",
              prodname:"Robert Recleaner2 Sofa set",
              producPrice:"Rs14,000",
              rating: 3
            },
            {
               prodimg:"./assets/desk.jpg",
               prodname:"Robert Recleaner2 Sofa set",
               producPrice:"Rs14,000",
               rating: 3
             },
             {
                prodimg:"./assets/desk.jpg",
                prodname:"Robert Recleaner2 Sofa set",
                producPrice:"Rs14,000",
                rating: 3
              }
      ]
    }

  }

    render(){

        return(
    <Grid>

        <Row>
                 <Col xs={12}>
                      <h2 className="text-center">Popular Products</h2>
                    </Col>
              <div>
                {
                this.state.data.map((dynamicData,i)=>
                <Col  md={4} xs={12} >
                <div className="thumbnail text-center ">
                  <Image src={dynamicData.prodimg} className="itemimage"/>
                       <h4><a href="#">{dynamicData.prodname}</a></h4>
                       <p>{dynamicData.producPrice}</p>

                  <StarRatingComponent
                    name="rate2"
                    starCount={5}
                    value={dynamicData.rating}

                    />
                </div>
                </Col>
                  )
                }
               </div>


        </Row>

 </Grid>


        );
    }
}
export default ProductList
