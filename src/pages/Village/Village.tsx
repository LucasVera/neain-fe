import { useState } from "react"
import InputWithLabel from "../../components/Input/Input"
import createVillage from "../../common/graphql/mutations/createVillage"
import styles from './Village.module.css'
import Button from "../../components/Button/Button"
import { toast } from "react-toastify"
import Spinner from "../../components/Spinner"

export default function Village() {
  const [newVillageName, setNewVillageName] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onCreateVillageClicked = async () => {
    setIsLoading(true)
    try {
      await createVillage(newVillageName)
    } catch (ex: any) {
      toast.error(ex?.message ?? 'An unknown error occured', { delay: 4000 })
    }
    finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      {
        isLoading
          ? <Spinner className={styles.spinnerStyle} size="large" />
          : <div className={styles.newVillageContainer}>
            <h3>New Village</h3>
            <InputWithLabel
              label="Village Name"
              placeholder="Enter village name"
              onChange={(e) => setNewVillageName(e)}
              value={newVillageName}
            />
            <Button
              className={styles.createVillageButton}
              onClick={onCreateVillageClicked}
              colorVariant="primary"
              disabled={!newVillageName}
            >
              Create New Village
            </Button>
          </div>
      }
    </div>
  )
}
