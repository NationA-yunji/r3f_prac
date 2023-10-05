function MyElement3D() {
  return (
    <>
      {/* 조명 - position의 경우 순서대로 X,Y,Z축 */}
      <directionalLight position={[1, 1, 1]} />

      {/* mesh = 렌더링할 3차원 모델 */}
      <mesh rotation-y={(45 * Math.PI) / 100}>
        <boxGeometry />
        <meshStandardMaterial color="#e76e22" />
      </mesh>
    </>
  );
}

export default MyElement3D;
