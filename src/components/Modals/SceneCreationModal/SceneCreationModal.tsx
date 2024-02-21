import { Close } from '@mtvproject/ui'
import Modal from '@mtvproject/dapps/dist/containers/Modal'
import { t } from '@mtvproject/dapps/dist/modules/translation/utils'
import { ModalProps } from '@mtvproject/dapps/dist/providers/ModalProvider/ModalProvider.types'
import SceneCreationSelector from 'components/SceneCreationSelector'
import styles from './SceneCreationModal.module.css'

export default function SceneCreationModal({ onClose }: ModalProps) {
  return (
    <Modal onClose={onClose} aria-modal role="dialog" closeIcon={<Close />} className={styles.modal}>
      <h2 className={styles.title}>{t('scenes_page.choose_scene_creation')}</h2>
      <SceneCreationSelector />
    </Modal>
  )
}
