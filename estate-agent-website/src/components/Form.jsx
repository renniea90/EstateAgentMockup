{ setEdit, setEditAddress, setEditPrice, setEditBedrooms, setEditBathrooms, setEditGarden, setEditImageUrl, setEditSaleStatus, edit, setEdit, editAddress, setEditAddress, editBathrooms, editBedrooms, editGarden, editID, editImageUrl, editPrice }



let [edit, setEdit] = useState([])




useEffect(() => {
    setEditID(edit)
    handleShow()
}, [edit]);


const openModal = () => {
    setModalState(true)
}
const closeModal = () => {
    setModalState(false)
}

const sendUpdate = (e, Address, Price, Bedrooms, Bathrooms, Garden, ImageUrl, SaleStatus) => {
    e.preventDefault()
    fetch('http://localhost:8000/Properties/' + editID, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Address: editAddress, Price: editPrice, Bedrooms: editBedrooms, Bathrooms: editBathrooms, Garden: editGarden, ImageUrl: editImageUrl, SaleStatus: editSaleStatus }),
    })
        .then(fetchData)
        .then(setEdit(""))
        .then(handleClose())
}


onSubmit={sendUpdate}

{edit}

onClick={() => EditProperty()}








