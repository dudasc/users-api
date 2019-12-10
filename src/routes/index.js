const express = require('express');
const router = express.Router();

const User = require("../controllers/user.controller");

router.use('/users', User);

/*
router.post('/api', function (req, res) {
  fs.readFile('usuarios.json', 'utf8', function (err, data) {
    if (err) {
      var response = { status: 'falha', resultado: err };
      res.json(response);
    } else {
      var obj = JSON.parse(data);
      req.body.usuario_id = obj.usuarios.length + 1;

      obj.usuarios.push(req.body);

      fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
        if (err) {
          var response = { status: 'falha', resultado: err };
          res.json(response);
        } else {
          var response = { status: 'sucesso', resultado: 'Registro incluso com sucesso' };
          res.json(response);
        }
      });
    }
  });
});

router.put('/api', function (req, res) {
  fs.readFile('usuarios.json', 'utf8', function (err, data) {
    if (err) {
      var response = { status: 'falha', resultado: err };
      res.json(response);
    } else {
      var obj = JSON.parse(data);

      obj.usuarios[(req.body.usuario_id - 1)].nome = req.body.nome;
      obj.usuarios[(req.body.usuario_id - 1)].site = req.body.site;

      fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
        if (err) {
          var response = { status: 'falha', resultado: err };
          res.json(response);
        } else {
          var response = { status: 'sucesso', resultado: 'Registro editado com sucesso' };
          res.json(response);
        }
      });
    }
  });
});

router.delete('/api', function (req, res) {
  fs.readFile('usuarios.json', 'utf8', function (err, data) {
    if (err) {
      var response = { status: 'falha', resultado: err };
      res.json(response);
    } else {
      var obj = JSON.parse(data);

      delete obj.usuarios[(req.body.usuario_id - 1)];

      fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
        if (err) {
          var response = { status: 'falha', resultado: err };
          res.json(response);
        } else {
          var response = { status: 'sucesso', resultado: 'Registro excluído com sucesso' };
          res.json(response);
        }
      });
    }
  });
});*/

module.exports = router;