import { BooleanInput, Button, Container, Label, NumericInput, Panel, RadioButton, SelectInput, SliderInput, VectorInput } from 'pcui';
import { Events } from '../events';
import { version as supersplatVersion } from '../../package.json';

class ControlPanel extends Panel {
    constructor(events: Events, remoteStorageMode: boolean, args = { }) {
        Object.assign(args, {
            headerText: `SUPER SPLAT v${supersplatVersion}`,
            id: 'control-panel',
            resizable: 'right',
            resizeMax: 1000,
            collapsible: true,
            collapseHorizontally: true,
            scrollable: true
        });

        super(args);

        // camera panel
        const cameraPanel = new Panel({
            id: 'camera-panel',
            class: 'control-panel',
            headerText: 'CAMERA'
        });

        const focusButton = new Button({
            class: 'control-element',
            text: 'Reset Focus'
        });

        // splat size
        const splatSize = new Container({
            class: 'control-parent'
        });

        const splatSizeLabel = new Label({
            class: 'control-label',
            text: 'Splat Size'
        });

        const splatSizeSlider = new SliderInput({
            class: 'control-element-expand',
            precision: 1,
            min: 0,
            max: 10,
            value: 2
        });

        splatSize.append(splatSizeLabel);
        splatSize.append(splatSizeSlider);

        // show grid
        const showGrid = new Container({
            class: 'control-parent'
        });

        const showGridLabel = new Label({
            class: 'control-label',
            text: 'Show Grid'
        });

        const showGridToggle = new BooleanInput({
            class: 'control-element',
            value: true
        });

        showGrid.append(showGridLabel);
        showGrid.append(showGridToggle);

        cameraPanel.append(focusButton);
        cameraPanel.append(splatSize);
        cameraPanel.append(showGrid);

        // selection panel
        const selectionPanel = new Panel({
            id: 'selection-panel',
            class: 'control-panel',
            headerText: 'SELECTION'
        });

        // select by size
        const selectBySize = new Container({
            class: 'control-parent'
        });

        const selectBySizeRadio = new RadioButton({
            class: 'control-element'
        });

        const selectBySizeLabel = new Label({
            class: 'control-label',
            text: 'Splat Size'
        });

        const selectBySizeSlider = new SliderInput({
            class: 'control-element-expand',
            precision: 4,
            enabled: false
        });

        selectBySize.append(selectBySizeRadio);
        selectBySize.append(selectBySizeLabel);
        selectBySize.append(selectBySizeSlider);

        // select by opacity
        const selectByOpacity = new Container({
            class: 'control-parent'
        });

        const selectByOpacityRadio = new RadioButton({
            class: 'control-element'
        });

        const selectByOpacityLabel = new Label({
            class: 'control-label',
            text: 'Splat Opacity'
        });

        const selectByOpacitySlider = new SliderInput({
            class: 'control-element-expand',
            precision: 4,
            enabled: false
        });

        selectByOpacity.append(selectByOpacityRadio);
        selectByOpacity.append(selectByOpacityLabel);
        selectByOpacity.append(selectByOpacitySlider);

        // select by sphere
        const selectBySphere = new Container({
            class: 'control-parent'
        });

        const selectBySphereRadio = new RadioButton({
            class: 'control-element'
        });

        const selectBySphereLabel = new Label({
            class: 'control-label',
            text: 'EndPoint'
        });

        const selectBySphereCenter = new VectorInput({
            class: 'control-element-expand',
            precision: 4,
            dimensions: 4,
            value: [0, 0, 0, 0.5],
            // @ts-ignore
            placeholder: ['X', 'Y', 'Z', 'R'],
            enabled: false
        });

        selectBySphere.append(selectBySphereRadio);
        selectBySphere.append(selectBySphereLabel);
        selectBySphere.append(selectBySphereCenter);

        // select by plane
        const selectByPlane = new Container({
            class: 'control-parent'
        });

        const selectByPlaneRadio = new RadioButton({
            class: 'control-element'
        });

        const selectByPlaneLabel = new Label({
            class: 'control-label',
            text: 'Plane'
        });

        const selectByPlaneAxis = new SelectInput({
            class: 'control-element',
            defaultValue: 'y',
            options: [
                { v: 'x', t: 'x' },
                { v: 'y', t: 'y' },
                { v: 'z', t: 'z' }
            ],
            enabled: false
        });

        const selectByPlaneOffset = new NumericInput({
            class: 'control-element-expand',
            precision: 2,
            enabled: false
        });

        selectByPlane.append(selectByPlaneRadio);
        selectByPlane.append(selectByPlaneLabel);
        selectByPlane.append(selectByPlaneAxis);
        selectByPlane.append(selectByPlaneOffset);

        // set/add/remove
        const setAddRemove = new Container({
            class: 'control-parent'
        });

        const setButton = new Button({
            class: 'control-element-expand',
            text: 'Set',
            enabled: false
        });

        const addButton = new Button({
            class: 'control-element-expand',
            text: 'Add',
            enabled: false
        });

        const removeButton = new Button({
            class: 'control-element-expand',
            text: 'Remove',
            enabled: false
        });

        setAddRemove.append(setButton);
        setAddRemove.append(addButton);
        setAddRemove.append(removeButton);

        // selection parent
        const selectTools = new Container({
            class: 'control-parent'
        });

        const rectSelectButton = new Button({
            class: 'control-element-expand',
            text: 'Rect',
            enabled: true
        });

        const brushSelectButton = new Button({
            class: 'control-element-expand',
            text: 'Brush',
            enabled: true
        });

        const startpointButton = new Button({
            class: 'control-element-expand',
            text: 'Start Point',
            enabled: true
        });

        // const endpointButton = new Button({
        //     class: 'control-element-expand',
        //     text: 'End Point',
        //     enabled: true
        // });

        selectTools.append(rectSelectButton);
        selectTools.append(brushSelectButton);
        selectTools.append(startpointButton);
        // selectTools.append(endpointButton);

        // selection button parent
        const selectGlobal = new Container({
            class: 'control-parent'
        });

        // all
        const selectAllButton = new Button({
            class: 'control-element-expand',
            text: 'All'
        });

        // none
        const selectNoneButton = new Button({
            class: 'control-element-expand',
            text: 'None'
        });

        // invert
        const invertSelectionButton = new Button({
            class: 'control-element-expand',
            text: 'Invert'
        });

        const downloadStartPointButton = new Button({
            class: 'control-element-expand',
            text: 'download StartPoint'
        });

        const downloadBrushPointButton = new Button({
            class: 'control-element-expand',
            text: 'download BrushPoint'
        });

        const downloadEndPointButton = new Button({
            class: 'control-element-expand',
            text: 'download EndPoint'
        });

        selectGlobal.append(selectAllButton);
        selectGlobal.append(selectNoneButton);
        selectGlobal.append(invertSelectionButton);
        selectGlobal.append(downloadStartPointButton);
        selectGlobal.append(downloadBrushPointButton);
        selectGlobal.append(downloadEndPointButton);

        selectionPanel.append(selectBySize);
        selectionPanel.append(selectByOpacity);
        selectionPanel.append(selectBySphere);
        selectionPanel.append(selectByPlane);
        selectionPanel.append(setAddRemove);
        selectionPanel.append(selectTools);
        selectionPanel.append(selectGlobal);

        // modify
        const modifyPanel = new Panel({
            id: 'modify-panel',
            class: 'control-panel',
            headerText: 'MODIFY'
        });

        const deleteSelectionButton = new Button({
            class: 'control-element',
            text: 'Delete Selected Splats',
            icon: 'E124'
        });

        const resetButton = new Button({
            class: 'control-element',
            text: 'Reset Splats'
        });

        const undoRedo = new Container({
            class: 'control-parent'
        });

        const undoButton = new Button({
            class: 'control-element-expand',
            text: 'Undo',
            icon: 'E339',
            enabled: false
        });

        const redoButton = new Button({
            class: 'control-element-expand',
            text: 'Redo',
            icon: 'E338',
            enabled: false
        });

        undoRedo.append(undoButton);
        undoRedo.append(redoButton);

        modifyPanel.append(deleteSelectionButton);
        modifyPanel.append(resetButton);
        modifyPanel.append(undoRedo);

        undoButton.on('click', () => { events.fire('edit:undo'); });
        redoButton.on('click', () => { events.fire('edit:redo'); });

        events.on('edit:canUndo', (value: boolean) => { undoButton.enabled = value; });
        events.on('edit:canRedo', (value: boolean) => { redoButton.enabled = value; });

        // export
        const exportPanel = new Panel({
            id: 'export-panel',
            class: 'control-panel',
            headerText: 'EXPORT TO'
        });

        const storageIcon = remoteStorageMode ? 'E222' : 'E245';

        const exportPlyButton = new Button({
            class: 'control-element',
            text: 'Ply file',
            icon: storageIcon
        });

        const exportCompressedPlyButton = new Button({
            class: 'control-element',
            text: 'Compressed Ply file',
            icon: storageIcon
        });

        const exportSplatButton = new Button({
            class: 'control-element',
            text: 'Splat file',
            icon: storageIcon
        });

        exportPanel.append(exportPlyButton);
        exportPanel.append(exportCompressedPlyButton);
        exportPanel.append(exportSplatButton);

        // options
        const optionsPanel = new Panel({
            id: 'options-panel',
            class: 'control-panel',
            headerText: 'OPTIONS'
        });

        const allData = new Container({
            class: 'control-parent'
        });

        const allDataLabel = new Label({
            class: 'control-label',
            text: 'Load all PLY data'
        });

        const allDataToggle = new BooleanInput({
            class: 'control-element',
            value: true
        });

        allData.append(allDataLabel);
        allData.append(allDataToggle);

        optionsPanel.append(allData);

        // append
        this.content.append(cameraPanel);
        this.content.append(selectionPanel);
        this.content.append(modifyPanel);
        this.content.append(exportPanel);
        this.content.append(optionsPanel);

        rectSelectButton.on('click', () => {
            events.fire('tool:activate', 'RectSelection');
        });

        brushSelectButton.on('click', () => {
            events.fire('tool:activate', 'BrushSelection');
        });

        startpointButton.on('click', () => {
            events.fire('tool:activate', 'StartPointSelection');
        });

        // endpointButton.on('click', () => {
        //     events.fire('tool:activate', 'EndPointSelection');
        // });

        events.on('tool:activated', (toolName: string) => {
            rectSelectButton.class[toolName === 'RectSelection' ? 'add' : 'remove']('active');
            brushSelectButton.class[toolName === 'BrushSelection' ? 'add' : 'remove']('active');
            startpointButton.class[toolName === 'StartPointSelection' ? 'add': 'remove']('active');
            // endpointButton.class[toolName === 'EndPointSelection' ? 'add': 'remove']('active');
        });

        // radio logic
        const radioGroup = [selectBySizeRadio, selectByOpacityRadio, selectBySphereRadio, selectByPlaneRadio];
        radioGroup.forEach((radio, index) => {
            radio.on('change', () => {
                if (radio.value) {
                    radioGroup.forEach((other) => {
                        if (other !== radio) {
                            other.value = false;
                        }
                    });

                    // update select by
                    events.fire('selectBy', index);
                } else {
                    // update select by
                    events.fire('selectBy', null);
                }
            });
        });

        const axes: any = {
            x: [1, 0, 0],
            y: [0, 1, 0],
            z: [0, 0, 1]
        };

        let radioSelection: number | null = null;
        events.on('selectBy', (index: number | null) => {
            radioSelection = index;

            setButton.enabled = index !== null;
            addButton.enabled = index !== null;
            removeButton.enabled = index !== null;

            const controlSet = [
                [selectBySizeSlider],
                [selectByOpacitySlider],
                [selectBySphereCenter],
                [selectByPlaneAxis, selectByPlaneOffset]
            ];

            controlSet.forEach((controls, controlsIndex) => {
                controls.forEach((control) => {
                    control.enabled = index === controlsIndex;
                });
            });

            events.fire('selectBySpherePlacement', index === 2 ? selectBySphereCenter.value : [0, 0, 0, 0]);
            events.fire('selectByPlanePlacement', index === 3 ? axes[selectByPlaneAxis.value] : [0, 0, 0], selectByPlaneOffset.value);
        });

        const performSelect = (op: string) => {
            switch (radioSelection) {
                case 0: events.fire('selectBySize', op, selectBySizeSlider.value); break;
                case 1: events.fire('selectByOpacity', op, selectByOpacitySlider.value); break;
                case 2: events.fire('selectBySphere', op, selectBySphereCenter.value); break;
                case 3: events.fire('selectByPlane', op, axes[selectByPlaneAxis.value], selectByPlaneOffset.value); break;
            }
        }

        setButton.on('click', () => performSelect('set'));
        addButton.on('click', () => performSelect('add'));
        removeButton.on('click', () => performSelect('remove'));

        focusButton.on('click', () => {
            events.fire('focusCamera');
        });

        splatSizeSlider.on('change', (value: number) => {
            events.fire('splatSize', value);
        });

        showGridToggle.on('change', (enabled: boolean) => {
            events.fire('showGrid', enabled);
        });

        selectAllButton.on('click', () => {
            events.fire('selectAll');
        });

        selectNoneButton.on('click', () => {
            events.fire('selectNone');
        });

        invertSelectionButton.on('click', () => {
            events.fire('invertSelection');
        });

        downloadStartPointButton.on('click', () => {
            events.fire('downloadStartPointButton');
        });

        downloadEndPointButton.on('click', () => {
            events.fire('downloadEndPointButton', selectBySphereCenter.value);
        });

        downloadBrushPointButton.on('click', () => {
            events.fire('downloadBrushPointButton');
        });



        selectBySphereCenter.on('change', () => {
            events.fire('selectBySpherePlacement', selectBySphereCenter.value);
        });

        selectByPlaneAxis.on('change', () => {
            events.fire('selectByPlanePlacement', axes[selectByPlaneAxis.value], selectByPlaneOffset.value);
        });

        selectByPlaneOffset.on('change', () => {
            events.fire('selectByPlanePlacement', axes[selectByPlaneAxis.value], selectByPlaneOffset.value);
        });

        deleteSelectionButton.on('click', () => {
            events.fire('deleteSelection');
        });

        resetButton.on('click', () => {
            events.fire('reset');
        });

        allDataToggle.on('change', (enabled: boolean) => {
            events.fire('allData', enabled);
        });

        exportPlyButton.on('click', () => {
            events.fire('export', 'ply');
        });

        exportCompressedPlyButton.on('click', () => {
            events.fire('export', 'ply-compressed');
        });

        exportSplatButton.on('click', () => {
            events.fire('export', 'splat');
        });

        events.on('splat:count', (count: number) => {
            selectionPanel.headerText = `SELECTION${count === 0 ? '' : ' (' + count.toString() + ')'}`;
        });

        let splatSizeSave = 1;

        // keyboard handler
        document.addEventListener('keydown', (e) => {
            if (e.ctrlKey || e.metaKey) {
                // handle meta/ctrl keys
                if (!e.shiftKey && e.key === 'z') {
                    events.fire('edit:undo');
                } else if (e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
                    events.fire('edit:redo');
                }
            } else {
                // handle non-meta/ctrl keys
                if (e.key === 'Delete' || e.key === 'Backspace') {
                    events.fire('deleteSelection');
                } else if (e.key === 'Escape') {
                    events.fire('tool:activate', '');
                } else if (e.key === '1') {
                    events.fire('tool:activate', 'Move');
                } else if (e.key === '2') {
                    events.fire('tool:activate', 'Rotate');
                } else if (e.key === '3') {
                    events.fire('tool:activate', 'Scale');
                } else if (e.key === 'R' || e.key === 'r') {
                    events.fire('tool:activate', 'RectSelection');
                } else if (e.key === 'G' || e.key === 'g') {
                    showGridToggle.value = !showGridToggle.value;
                } else if (e.key === 'C' || e.key === 'c') {
                    events.fire('tool:coordSpace:toggle');
                } else if (e.key === 'F' || e.key === 'f') {
                    events.fire('focusCamera');
                } else if (e.key === 'B' || e.key === 'b') {
                    events.fire('tool:activate', 'BrushSelection');
                } else if (e.key === 'I' || e.key === 'i') {
                    events.fire('invertSelection');
                } else if (e.key === '[') {
                    events.fire('brushSelection:smaller');
                } else if (e.key === ']') {
                    events.fire('brushSelection:bigger');
                } else if (e.code === 'Space') {
                    if (splatSizeSlider.value !== 0) {
                        splatSizeSave = splatSizeSlider.value;
                        splatSizeSlider.value = 0;
                    } else {
                        splatSizeSlider.value = splatSizeSave;
                    }
                }
            }
        });
    }
}

export { ControlPanel };
