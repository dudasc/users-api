var fs = require('fs');

exports.getAll = async (params, callback) => {
    fs.readFile('usuarios.json', 'utf8', function (err, data) {
        if (err) {
            callback(true, err);
            return;
        }

        var obj = JSON.parse(data);
        var result = 'Nenhum usuário foi encontrado';
        var total = 0;

        if (obj.usuarios.length != 0) {
            result = obj.usuarios;
            total = result.length;
        }

        callback(false, 'ok', total, result);
    });
}

exports.get = async (params, callback) => {
    fs.readFile('usuarios.json', 'utf8', function (err, data) {
        if (err) {
            callback(true, err);
            return;
        }

        var obj = JSON.parse(data);
        var result = 'Nenhum usuário foi encontrado';
        var total = 0;
        var id = params.id;

        obj.usuarios.forEach(function (usuario) {
            if (usuario != null) {
                if (usuario.usuario_id == id) {
                    result = usuario;
                    total = result.length;
                }
            }
        });

        callback(false, 'ok', total, result);
    });
}

exports.add = async (params, callback) => {

    fs.readFile('usuarios.json', 'utf8', function (err, data) {
        if (err) {
            callback(true, err);
            return;
        }

        var obj = JSON.parse(data);
        var result = 'Usuário cadastrado com sucesso.';
        params.usuario_id = obj.usuarios.length + 1;
    
        obj.usuarios.push(params);
    
        fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
            if (err) {
                callback(true, err);
                return;
            } 
            callback(false, '', 1, result);           
        });        
    });
}

exports.update = async (params, callback) => {
    
    fs.readFile('usuarios.json', 'utf8', function (err, data) {
        if (err) {
            callback(true, err);
            return;
        }

        var result = 'Usuário cadastrado com sucesso.';
        
        var obj = JSON.parse(data); 
        if(obj.usuarios[(params.usuario_id - 1)].usuario_id = params.usuario_id)   {
            callback(true, "Usuário não encontrado");
            return;
        }

        obj.usuarios[(params.usuario_id - 1)].nome = params.nome;
        obj.usuarios[(params.usuario_id - 1)].site = params.site;
        
    
        fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
            if (err) {
                callback(true, err);
                return;
            } 
            
            callback(false, '', 1, result);
            
        });        
    });
}

exports.delete = async(params, callback) =>{
    fs.readFile('usuarios.json', 'utf8', function (err, data) {
        if (err) {
            callback(true, "Um erro ocorreu.", err);
            return;
        }     
        
        var obj = JSON.parse(data);
    
        delete obj.usuarios[(params.issd - 1)];
    
        fs.writeFile('usuarios.json', JSON.stringify(obj), function (err) {
            if (err) {
                callback(true, "Um erro ocorreu.", err);
                return;
            }             
            callback(false, '', 1, 'Usuário excluído com sucesso.');
            
        });        
    });
}
