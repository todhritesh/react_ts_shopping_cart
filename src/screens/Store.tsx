import StoreItem from "../components/StoreItem"
import storeItems from "../data/items.json"

export default function Store () {
    return (
        <div className="container mt-5">
            <div className="pt-5"></div>
            <div className="row">
                {
                    storeItems.map(item=>(
                        <div key={item.id} className="col-lg-4 p-2 col-md-6">
                            <StoreItem {...item} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}