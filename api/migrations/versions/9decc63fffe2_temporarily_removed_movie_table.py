"""temporarily removed Movie table

Revision ID: 9decc63fffe2
Revises: 221b45158578
Create Date: 2022-04-05 10:51:44.163573

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9decc63fffe2'
down_revision = '221b45158578'
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
    sa.Column('movie', sa.BLOB(), nullable=False),
    sa.Column('user_id', sa.INTEGER(), nullable=False),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###