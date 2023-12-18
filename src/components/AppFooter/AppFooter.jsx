const AppFooter = () => {
    return (
        <>
            <hr className='featurette-divider' />
            <footer
                style={{ padding: "0 50px" }}
                className='navbar fixed-bottom'
            >
                <p className='float-right'>
                    <a href='/'>Back to the Top</a>
                </p>
                <p>
                    &copy; 2023 - Daniel Myers -{" "}
                    <a href='/'>Terms and Conditions</a>
                </p>
            </footer>
        </>
    );
};

export default AppFooter;
