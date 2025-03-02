import Info from "./Info";

const Footer = () => {
    const res = Info.map((item) => {
        return (
            <div>
                <h1>{item.Name}</h1>
                <h1>{item.City}</h1>
                <h1>{item.Course}</h1>
                <hr />
            </div>
        );
    });

    return (
        <>
            <h1>Footer Part</h1>
            <hr /> <hr /> <hr />
            {res}
           
        </>
    );
};

export default Footer;
