import db from "../models/index.js";

const { notes: Note } = db;

// Retrieve all Notes from the database.
const fetchmany = (req, res) => {
  const page_number = req.query.page_number ? +req.query.page_number : 1;
  const limit = req.query.per_page ? +req.query.per_page : 20;
  const offset = limit * (page_number - 1);
  Note.findAndCountAll({
    offset,
    limit,
    attributes: ["id", "sfld", "translate"],
  })
    .then((data) => {
      const pagination = {
        total: data.count,
        per_page: limit,
        page_number,
      };
      res.send({
        status: true,
        message: `Lấy thông tin thành công`,
        data: data.rows,
        pagination,
      });
    })
    .catch((err) => {
      res.status(500).send({
        status: false,
        message: err.message || "Lất thông tin không thành công",
      });
    });
};

// Find a single Note with an id
const fetchone = (req, res) => {
  const { id } = req.params;
  Note.findByPk(id, { attributes: ["id", "sfld", "translate"] })
    .then((data) => {
      res.send({
        status: true,
        message: `Lấy thông tin thành công`,
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: false,
        message: "Error retrieving Note with id=" + id,
      });
    });
};

// Update a Note by the id in the request
const update = (req, res) => {
  const { id } = req.params;

  Note.update(
    {
      translate: req.body.translate,
    },
    {
      where: { id },
    }
  )
    .then((num) => {
      if (num == 1) {
        res.send({
          status: true,
          message: "Cập nhật thành công.",
        });
      } else {
        res.send({
          status: false,
          message: `Cập nhật thất bại. Vui lòng kiểm tra lại`,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        status: false,
        message: "Error updating Note with id=" + id,
      });
    });
};

const notesController = { fetchmany, fetchone, update };

export default notesController;
