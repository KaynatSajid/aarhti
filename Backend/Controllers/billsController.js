const bill= require( '../Models/billsModel');

exports.createBill = async (req, res) => {
    try {
      const n_bill = await bill.create(req.body);
      console.log(n_bill);
      res.status(200).json({
        status: 'Success',
        message: n_bill,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err,
      });
    }
  };