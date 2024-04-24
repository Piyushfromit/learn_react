

function MyAvtar(props) {
    const { name, src, rounded } = props;
    const styles = {
        borderRadius: "16px",
    };

    if (rounded) {
        {/* or props.rounded */ }
        styles.borderRadius = "50%";
    }

    return (
        <div>
            <img
                src={src}   // or props.src
                alt="Dummy Image"
                height="230px"
                style={styles}
            />
            <h3 style={{ color: "red" }} >  {name}  </h3>      {/* or props.name */}
        </div>
    );
}

export default MyAvtar;