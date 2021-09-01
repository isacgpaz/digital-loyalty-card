import Image from 'next/image';
import { useAuth } from '../../hooks/useAuth';
import { IFlag } from '../../interfaces/IFlag';
import { Badge, CheckedFlag, Container, Flag, Flags, Header } from "./styled";

export function Card(){
  const { user } = useAuth();

  const flags = user.flags;

  const flagsChecked = flags.filter((flag: IFlag) => { return flag.isChecked });

  return (
    <Container>
      <Header>
        <Badge background={
          (flagsChecked.length >= 0 && flagsChecked.length < 4) ? "gray-dark"
          : (flagsChecked.length >= 4 && flagsChecked.length < 8) ? "orange"
          : (flagsChecked.length >= 8 && flagsChecked.length < 12) ? "yellow"
          : flagsChecked.length == 10 ? "green"
          : flagsChecked.length == 12 ? "green-light"
          : "none"
        } 
        >
          { flagsChecked.length } Caktus
        </Badge>

        <p>
          A cada 12 rodízios o 13º é por nossa conta. Visite o 
          Caktus Restaurante para liberar mais carimbos.
        </p>
      </Header>

      <Flags>
        { flags.length != 0 && 
          flags.map(flag => {
            return (
              <Flag key={flag._id}>
                { flag.isChecked && 
                  <CheckedFlag>
                    <Image 
                      src="/checked.png"
                      alt="Checked"
                      width={40}
                      height={40}
                    />  
                  </CheckedFlag>
                }
                
                <Image 
                  src="/cactus.png"
                  alt="Cactus flag"
                  width={45}
                  height={45}
                />
              </Flag>
            )
          })
        }
      </Flags>
    </Container>
  )
}