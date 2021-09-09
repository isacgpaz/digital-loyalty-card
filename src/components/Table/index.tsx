import * as BsIcons from 'react-icons/bs';
import { IFlag } from '../../interfaces/IFlag';
import { IUser } from '../../interfaces/IUser';
import { TableUsers } from './styles';

interface TableProps{
  users: Array<IUser>
}

export function Table({ users }: TableProps) {
  return (
    <TableUsers>
      <thead>
        <tr>
          <th>Clientes({users?.length})</th>
          <th>Carimbos</th>
        </tr>
      </thead>
      <tbody>
      {users &&
        users?.length != 0 && 
          users?.map(user => {
            return (
              <tr key={user._id}>
                <td>
                  <p>{user.name}</p>  
                  <span>ID {user.googleId}</span>
                  <small>
                    <BsIcons.BsCalendar />
                    {user.updatedAt}
                  </small>
                </td>    
                <td>{(user?.flags.filter((flag: IFlag) => { return flag.isChecked })).length}</td>
              </tr>
            )
          })
        }
      </tbody>
    </TableUsers>
  )
}