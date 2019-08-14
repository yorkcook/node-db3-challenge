module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

const express = require("express");

const knex = require("knex");

const knexConfig = require("../knexfile.js");

const db = knex(knexConfig.development);

const router = express.Router();

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

function findSteps(id) {
  return (
    db("schemes as s")
      .innerJoin("steps as st", "s.id", "st.scheme_id")
      .select("s.scheme_name", "st.step_number", "st.instructions")

      .where({ scheme_id: id })
      // .orderBy([
      //   "id",
      //   { column: "s.scheme_name", order: "desc" },
      //   { column: "st.step_number", order: "asc" }
      // ]);

      //   .orderBy("st.step_number", asc)
      .orderBy("st.step_number")
  );
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where({ id })
    .del();
}
