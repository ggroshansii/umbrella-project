"""dropped Movie table

Revision ID: 1859bebb95fa
Revises: a3b97c8a3e29
Create Date: 2022-03-29 14:27:13.919458

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '1859bebb95fa'
down_revision = 'a3b97c8a3e29'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('movie')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movie',
    sa.Column('id', sa.INTEGER(), nullable=False),
    sa.Column('movie', sa.VARCHAR(length=300), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###
