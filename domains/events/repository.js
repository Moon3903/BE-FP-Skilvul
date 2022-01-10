const db = require("../../models");

module.exports = {
  getById: async (id) => {
    const result = await db.events.findByPk(id, {
      include: [
        {
          model: db.participants,
          attributes: ["id", "email"],
        },
        {
          model: db.users,
          attributes: ["id", "email"],
        },
      ],
    });
    return result;
  },
  getDocumentation: async(id)=>{
    tmp = "SELECT * FROM event_documentations WHERE eventId = " + id;
    const result = await db.sequelize.query(tmp);
    return result;
  },
  createDocumentation: async(payload)=>{
    const result = await db.event_documentations.create(payload);
    return result;
  },
  create: async (payload) => {
    const result = await db.events.create(payload);
    return result;
  },
  get: async () => {
    const result = await db.events.findAll({
      include: [
        {
          model: db.users,
          attributes: ["id", "email"],
        },
      ],
    });

    return result;
  },
  delete: async (id) => {
    const result = await db.events.destroy({ where: { id } });
    if (result) return true;
    return false;
  },
  edit: async (id, payload) => {
    const result = await db.events.update(payload, { where: { id } });
    if (result) return result;
    return null;
  },
};
