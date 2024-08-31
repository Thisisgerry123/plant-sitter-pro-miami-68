"""empty message

Revision ID: cf21812b3a90
Revises: abe64684ff48
Create Date: 2024-08-30 23:18:42.533429

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'cf21812b3a90'
down_revision = 'abe64684ff48'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plant_sitters', schema=None) as batch_op:
        batch_op.add_column(sa.Column('profile_picture', sa.Text(), nullable=True))
        batch_op.drop_column('profile_picture_url')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('plant_sitters', schema=None) as batch_op:
        batch_op.add_column(sa.Column('profile_picture_url', sa.VARCHAR(length=255), autoincrement=False, nullable=True))
        batch_op.drop_column('profile_picture')

    # ### end Alembic commands ###
