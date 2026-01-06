import Box from "../ui/Box";
import SleekButton from "../ui/Button";
import { useState, useRef, useEffect } from "react";

function Column(props) {
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    const taskId = e.dataTransfer.getData("taskId");

    props.onDrop(taskId);
  }

  const contentRef = useRef(null);

  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  function checkScroll() {
    const element = contentRef.current;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const clientHeight = element.clientHeight;

    setCanScrollUp(scrollTop > 0);
    setCanScrollDown(scrollTop + clientHeight < scrollHeight - 1);
  }

  useEffect(() => {
    checkScroll();
    window.addEventListener("resize", checkScroll);
    return () => window.removeEventListener("resize", checkScroll);
  }, [props.children]);

  return (
    <Box width="100%" maxWidth="30vw" backgroundColor="#757575" border="none">
      {/* <div
        className="column"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={columnUpperBarColorStyle}
      >
      </div>*/}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3 style={{ marginLeft: 12, color: "white", fontWeight: "lighter" }}>
          {props.title}
        </h3>
        <SleekButton style={{ backgroundColor: "transparent" }} text="+" />
      </div>

      <div
        style={{
          position: "relative",
          flexGrow: 1,
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
          maxHeight: "100%",
        }}
      >
        {/* Top Shadow */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "40px",
            background:
              "linear-gradient(to bottom, rgba(117, 117, 117, 0.95), transparent)",
            pointerEvents: "none", // Clicks pass through
            opacity: canScrollUp ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
            zIndex: 1,
          }}
        />

        {/* Bottom Shadow */}
        <div
          style={{
            position: "absolute",
            bottom: 48.5,
            left: 0,
            right: 0,
            height: "40px",
            background:
              "linear-gradient(to top, rgba(117, 117, 117, 0.95), transparent)",
            pointerEvents: "none",
            opacity: canScrollDown ? 1 : 0,
            transition: "opacity 0.2s ease-in-out",
            zIndex: 1,
          }}
        />

        {/* Scrollable Content */}
        <div
          ref={contentRef}
          className="content"
          onScroll={checkScroll}
          style={{
            overflowY: "scroll",
            overflowX: "hidden",
            marginBottom: "48.5px",
          }}
        >
          {props.children}
        </div>
      </div>
    </Box>
  );
}

export default Column;
