import Item from "../../models/Item/itemModel.js";

export const addItem = async (req, res) => {
  try {
    const { img, title, discription, price } = req.body;

    if (!img | !title | !discription | !price) {
      return res.status(301).json({
        message: "All fields are required",
      });
    }

    const newItem = new Item(req.body);
    await newItem.save();

    return res.status(201).json({
      message: "Item Created Successfully",
      item: newItem,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      message: "Failed to add item",
      error: error.message,
    });
  }
};


export const getAllItem = async(req, res)=>{
  try {
    const allItem = await Item.find()
    

  } catch (error) {
    
  }
}
