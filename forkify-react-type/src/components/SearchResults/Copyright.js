import classes from './Copyright.module.css'

const Copyright = () => {
    return (
        <p className={classes.copyright}>
          &copy; Copyright by
          <a
            className={classes["twitter-link"]}
            target="_blank"
            href="https://twitter.com/jonasschmedtman"
            >Jonas Schmedtmann</a
          >. Use for learning or your portfolio. Don't use to teach. Don't claim
          as your own.
        </p>
    )
}

export default Copyright;