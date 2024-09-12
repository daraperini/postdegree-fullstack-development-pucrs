import sqlalchemy as sa

engine = sa.create_engine("sqlite:///C:\\git-daraperini\\learning\\pós-graduacao-full-stack\postdegree-fullstack-development-pucrs\\14-banco-de-dados-relacional\\aula-1-2\\ORM\\BD\\vendas.db")
# cria uma engine

import sqlalchemy.orm as orm

base = orm.declarative_base() 
# possibilita criação de classes, é a base da estrutura

# Criando tabela cliente - criar todas as tabelas que possuam PKs antes das tabelas com FKs
class cliente(base):
    __tablename__ = "cliente"

    cpf = sa.Column(sa.CHAR(14), primary_key = True, index = True)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    email = sa.Column(sa.VARCHAR(50), nullable = False)
    genero = sa.Column(sa.CHAR(1))
    salario = sa.Column(sa.DECIMAL(10, 2))
    dia_mes_aniversario = sa.Column(sa.CHAR(5))
    bairro = sa.Column(sa.VARCHAR(50))
    cidade = sa.Column(sa.VARCHAR(50))
    uf = sa.Column(sa.CHAR(2))

# tabela fornecedor
class fornecedor(base):
    __tablename__ = "fornecedor"

    registro_fornecedor = sa.Column(sa.INTEGER, primary_key = True, index = True)
    nome_fantasia = sa.Column(sa.VARCHAR(50), nullable = False)
    razao_social = sa.Column(sa.VARCHAR(50), nullable = False)
    cidade = sa.Column(sa.VARCHAR(50), nullable = False)
    uf = sa.Column(sa.CHAR(2), nullable = False)

# tabela produto
class produto(base):
    __tablename__ = "produto"

    codBarras = sa.Column(sa.INTEGER, primary_key = True, index = True)
    registro_fornecedor = sa.Column(sa.INTEGER, sa.ForeignKey("fornecedor.registro_fornecedor", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
    dscProduto = sa.Column(sa.VARCHAR(100), nullable = False)
    genero = sa.Column(sa.CHAR(1))

# tabela vendedor
class vendedor(base):
    __tablename__ = "vendedor"

    registro_vendedor = sa.Column(sa.INTEGER, primary_key = True, index = True)
    cpf = sa.Column(sa.CHAR(14), nullable = False)
    nome = sa.Column(sa.VARCHAR(100), nullable = False)
    email = sa.Column(sa.VARCHAR(50), nullable = False)
    genero = sa.Column(sa.CHAR(1))

# tabela vendas
class vendas(base):
    __tablename__ = "vendas"

    idTransacao = sa.Column(sa.INTEGER, primary_key = True, index = True)
    cpf = sa.Column(sa.CHAR(14), sa.ForeignKey("cliente.cpf", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
    registro_vendedor = sa.Column(sa.INTEGER, sa.ForeignKey("vendedor.registro_vendedor", ondelete="NO ACTION", onupdate="CASCADE"), index = True)
    codBarras = sa.Column(sa.INTEGER, sa.ForeignKey("produto.codBarras", ondelete="NO ACTION", onupdate="CASCADE"), index = True)

# criar as tabelas
try:
    base.metadata.create_all(engine) 
    print("Tabelas criadas")
except ValueError:
    ValueError()