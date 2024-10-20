const page = ({ params }: {
    params: { productId: string }
}) => {
    return (
        <div>
            product id is {params.productId}
        </div>
    );
};

export default page;