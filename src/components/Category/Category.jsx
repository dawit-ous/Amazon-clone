import React from 'react'
import { CategoryImages } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard"
import classes from "./Category.module.css";
function Category() {
  return (
    <section className={classes.category__container}>
      {CategoryImages.map((infos,i) => (
        <CategoryCard data={infos} key={i}/>
      ))}
    </section>
  );
}

export default Category
