"""empty message

Revision ID: 682fe27c1537
Revises: 7c3565068917
Create Date: 2023-08-28 18:24:59.452667

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '682fe27c1537'
down_revision = '7c3565068917'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.add_column(sa.Column('username', sa.String(length=120), nullable=False))
        batch_op.create_unique_constraint(None, ['username'])

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('user', schema=None) as batch_op:
        batch_op.drop_constraint(None, type_='unique')
        batch_op.drop_column('username')

    # ### end Alembic commands ###
