import classes from './Figure.module.css'

const Figure = (props) => {
    return (
        <figure className={classes["recipe__fig"]}>
          <img src={props.recipe.image} alt={props.recipe.title} className={classes["recipe__img"]} />
          <h1 className={classes["recipe__title"]}>
            <span>{props.recipe.title}</span>
          </h1>
        </figure>
    )
}

export default Figure;