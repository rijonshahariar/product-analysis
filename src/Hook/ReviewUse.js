import { useEffect, useState } from "react"

const ReviewUse = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('fakeuserDB.json')
            .then(res => res.json())
            .then(data => setReview(data));
    }, []);
    return [review, setReview];
}

export default ReviewUse;